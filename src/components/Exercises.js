import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const theme = createTheme({
  components: {
    MuiPagination: {
      styleOverrides: {
        ul: {
          '& .MuiPaginationItem-root': {
            color: 'white', // Change page number color to white
          },
          '& .MuiPaginationItem-ellipsis': {
            color: 'white', // Change ellipsis color to white
          },
          '& .MuiPaginationItem-previousNext': {
            color: 'white', // Change arrow color to white
          },
          '& .Mui-selected': {
            backgroundColor: 'transparent', // Ensure selected item does not have background
            color: 'white', // Change selected page number color to white
          },
          '& .MuiPaginationItem-previousNext:hover': {
            color: 'white', // Change arrow hover color to white
          }
        },
      },
    },
  },
});

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <ThemeProvider theme={theme}>
      <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
        <Typography variant="h4" color="#FF2625" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results : </Typography>
        <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
          {currentExercises.map((exercise, idx) => (
            <ExerciseCard key={idx} exercise={exercise} />
          ))}
        </Stack>
        <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
          {exercises.length > 9 && (
            <Pagination
              color="primary"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default Exercises;
