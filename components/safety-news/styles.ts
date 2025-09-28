export function getSeverityBadgeStyle(severity: string) {
  switch (severity) {
    case 'High':
      return 'bg-red-100 dark:bg-red-900/30';
    case 'Medium':
      return 'bg-orange-100 dark:bg-orange-900/30';
    case 'Low':
      return 'bg-green-100 dark:bg-green-900/30';
    default:
      return 'bg-gray-100 dark:bg-gray-900/30';
  }
}

export function getSeverityTextStyle(severity: string) {
  switch (severity) {
    case 'High':
      return 'text-red-700 dark:text-red-300';
    case 'Medium':
      return 'text-orange-700 dark:text-orange-300';
    case 'Low':
      return 'text-green-700 dark:text-green-300';
    default:
      return 'text-gray-700 dark:text-gray-300';
  }
}

export const tabStyles = {
  container: 'flex-row mb-6 bg-gray-100 dark:bg-gray-800 rounded-xl p-1',
  activeTab: 'flex-1 py-3 px-4 rounded-lg bg-white dark:bg-gray-700 shadow-sm',
  inactiveTab: 'flex-1 py-3 px-4 rounded-lg bg-transparent',
  activeTabText: 'text-center font-medium text-foreground',
  inactiveTabText: 'text-center font-medium text-muted-foreground',
};

export const reportCardStyles = {
  container: 'shadow-sm',
  content: 'p-4',
  header: 'flex-row items-center justify-between mb-3',
  categorySection: 'flex-row items-center',
  categoryText: 'text-xs text-muted-foreground ml-2',
  photoIndicator: 'flex-row items-center ml-3',
  photoText: 'text-xs text-muted-foreground ml-1',
  severityBadge: 'px-3 py-1 rounded-full',
  severityText: 'text-xs font-medium',
  title: 'text-base font-semibold text-foreground mb-2',
  imageContainer: 'mb-3',
  image: 'w-full h-48 rounded-lg bg-gray-200 dark:bg-gray-700',
  description: 'text-sm text-muted-foreground mb-3 leading-5',
  locationTimeSection: 'flex-row items-center mb-3',
  locationContainer: 'flex-row items-center mr-4',
  locationText: 'text-xs text-muted-foreground ml-1',
  timeContainer: 'flex-row items-center',
  timeText: 'text-xs text-muted-foreground ml-1',
  footer: 'flex-row items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700',
  reporterSection: 'flex-row items-center',
  reporterAvatar: 'w-6 h-6 rounded-full bg-blue-500 mr-2 items-center justify-center',
  reporterInitial: 'text-xs text-white font-bold',
  reporterName: 'text-xs text-muted-foreground',
  viewsSection: 'flex-row items-center',
  viewsText: 'text-xs text-muted-foreground ml-1',
  seeMoreButton: 'ml-4',
  seeMoreText: 'text-xs text-blue-600 dark:text-blue-400 font-medium',
};

export const emptyStateStyles = {
  container: 'flex-1 items-center justify-center py-12',
  iconContainer: 'w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full items-center justify-center mb-4',
  title: 'text-lg font-semibold text-foreground mb-2',
  description: 'text-center text-muted-foreground px-8',
};

export const headerStyles = {
  container: 'mb-6',
  title: 'text-2xl font-bold text-foreground mb-2',
  subtitle: 'text-sm text-muted-foreground',
};
