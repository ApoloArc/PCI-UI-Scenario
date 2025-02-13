function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-gb");
}

export default formatDate;