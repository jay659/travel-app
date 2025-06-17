export async function loadSyncfusionComponent(moduleName: string, componentName: string) {
  try {
    const module = await import(moduleName);
    return module[componentName] || module.default?.[componentName];
  } catch (error) {
    console.error(`Failed to load Syncfusion component ${componentName}:`, error);
    return null;
  }
}