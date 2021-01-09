export function a11yProps(index: any) {
  return {
    id: `p-tab-${index}`,
    "aria-controls": `p-tabpanel-${index}`,
  };
}
