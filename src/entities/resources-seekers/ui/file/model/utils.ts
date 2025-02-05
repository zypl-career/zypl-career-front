import { wordWhiteListFormat } from './constants';
import { Description } from './types';

export const filteredDocx = (description?: Description[]) => {
  return description?.filter((desc) =>
    wordWhiteListFormat.some((format) => desc.props.name.includes(format)),
  );
};

export const filteredPDF = (description?: Description[]) => {
  return description?.filter((desc) => desc.props.name.includes('pdf'));
};
