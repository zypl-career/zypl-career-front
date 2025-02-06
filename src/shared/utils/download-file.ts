export const downloadFile = async (url: string, name = 'new file') => {
  return await fetch(url || '')
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.dir('Download error:', error));
};
