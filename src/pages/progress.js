import React from 'react';
import { progressData } from "../data/progressData"

const Progress = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      {progressData.map((data, key) =>{
        return (
          <div key={key}>
            <p>Home Town Coverage: {data.HomeTownCoverage}</p>
            <p>Home County Coverage: {data.HomeCountyCovered}</p>
            <p>Home Country Coverage: {data.HomeCountryCovered}</p>
            <p>BronzeAwards: {data.BronzeAwards}</p>
            <p>SilverAwards: {data.SilverAwards}</p>
            <p>GoldAwards: {data.GoldAwards}</p>
            <p>CompletedChallenges: {data.CompletedChallenges}</p>
            <p>TreasureChests: {data.TreasureChests}</p>
          </div>
        )
      })}
    </div>
  );
};

export default Progress;
