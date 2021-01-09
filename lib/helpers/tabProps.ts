export function a11yProps(index: number) {
  return {
    id: `p-tab-${index}`,
    "aria-controls": `p-tabpanel-${index}`,
  };
}
