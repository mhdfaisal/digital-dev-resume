import React from 'react';
import emoji from 'react-easy-emoji';

import './EmojiList.css';

interface IEmojiList {
  dataArr: string[];
}

/**
 * A presentational component to display a bulleted list.
 * @prop dataArr - An array to be displayed as bulleted list.
 */
const EmojiList: React.FC<IEmojiList> = (props) => {
  const { dataArr } = props;
  return (
    <span className="emoji__list">
      {dataArr &&
        dataArr.map((dataItem) => (
          <span key={Math.random()} className="emoji__list__item">
            <span className="emoji__list__item-icon">{emoji('👉')}</span>
            <span className="emoji__list__item-text">{dataItem}</span>
          </span>
        ))}
    </span>
  );
};

export default EmojiList;
