export function a11yProps(index) {
  return {
    id: `p-tab-${index}`,
    "aria-controls": `p-tabpanel-${index}`,
  };
}
