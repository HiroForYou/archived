const getModelTypeIcon = (taskName) => {
  switch (taskName) {
    case 'Image Classification':
      return 'visibility';
    case 'Image Segmentation':
      return 'visibility';
    case 'Sentiment Analysis':
      return 'chat';
    default:
      return '';
  }
};

export default { getModelTypeIcon };
