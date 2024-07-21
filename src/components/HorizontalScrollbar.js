import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Box } from '@mui/material';

import '../styles.css';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <div className="scroll-container">
    <ScrollMenu className="scroll-menu">
      <div className="scroll-content">
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
          >
            {bodyParts ? (
              <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </div>
    </ScrollMenu>
  </div>
);

export default HorizontalScrollbar;
