export function getChartCategories(dataArray) {
  const categories = new Set();
  Object.keys(dataArray.at(0))
    .slice(1)
    .forEach((key) => {
      categories.add(key);
    });

  return Array.from(categories);
}
export function getDonutChartCategories(dataArray) {
  const categories = dataArray.map((dataObj) => dataObj._id);

  return categories;
}

export function generateColors(numColors) {
  const colors = ["blue-500", "green-500", "orange-500", "violet-500","red-500","yellow-500","cyan-500","pink-500"];
  const dynamicColors = [];

  for (let i = 0; i < numColors; i++) {
    dynamicColors.push(colors[i % colors.length]);
  }

  return dynamicColors;
}

export function formatNumber(num) {
  const absNum = Math.abs(num);

  if (absNum >= 1e6) {
    // 10 puissance 6 == million
    return `${(num / 1e6).toFixed(2)}M`;
  } else if (absNum >= 1e3) {
    // thousand
    return `${(num / 1e3).toFixed(2)}k`;
  }

  return num?.toFixed(2);
}
export function getDate() {
  const currentDate = new Date();

  const dayOfTheWeek = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const day = currentDate.getDate();
  const month = currentDate.toLocaleDateString("en-US", { month: "long" });
  const year = currentDate.getFullYear();
  return { dayOfTheWeek, day, month, year };
}
