function parseCount(value) {
  const parsed = Number.parseFloat(value);
  if (Number.isNaN(parsed)) {
    throw new Error("Невалидное значение");
  }
  return parsed;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}