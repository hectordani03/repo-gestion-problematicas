// apps/mobile/src/styles/components/dashboard/dashboardComponents.styles.ts

import { StyleSheet } from 'react-native'
import { palette } from '../../theme/colors'
import { spacing } from '../../theme/spacing'
import { typography } from '../../theme/typography'

export const ProjectStatsStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: spacing.md * -0.5,
  },
  card: {
    width: '48%',
    backgroundColor: palette.background,
    borderRadius: spacing.lg,
    padding: spacing.md,
    margin: spacing.md * 0.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  icon: {
    fontSize: typography.xl2,
    marginRight: spacing.sm,
    color: palette.primary,
  },
  label: {
    fontSize: typography.base,
    fontWeight: '600',
    color: palette.text,
  },
  value: {
    fontSize: typography.xl3,
    fontWeight: 'bold',
    textAlign: 'center',
    color: palette.text,
  },
})

export const ProjectListStyles = StyleSheet.create({
  container: {
    backgroundColor: palette.background,
    borderRadius: spacing.lg,
    padding: spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  itemText: {
    fontSize: typography.base,
    color: palette.text,
  },
  statusDot: {
    width: spacing.sm,
    height: spacing.sm,
    borderRadius: spacing.sm / 2,
  },
  separator: {
    height: 1,
    backgroundColor: palette.grayLight,
    marginVertical: spacing.sm,
  },
})

export const RecentProjectsStyles = StyleSheet.create({
  container: {
    backgroundColor: palette.background,
    borderRadius: spacing.lg,
    padding: spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  title: {
    fontSize: typography.lg,
    fontWeight: '600',
    color: palette.text,
  },
  project: {
    flexDirection: 'row',
    marginBottom: spacing.md,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: spacing.sm,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: typography.base,
    fontWeight: '600',
    color: palette.text,
  },
  desc: {
    fontSize: typography.base,
    color: palette.textSecondary,
  },
  date: {
    fontSize: typography.sm,
    color: palette.gray,
    marginTop: spacing.xs,
  },
})

export const RecentActivityStyles = StyleSheet.create({
  container: {
    backgroundColor: palette.background,
    borderRadius: spacing.lg,
    padding: spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    fontSize: typography.lg,
    fontWeight: '600',
    color: palette.text,
    marginBottom: spacing.md,
  },
  timeline: {
    position: 'relative',
    paddingLeft: spacing.sm,
  },
  line: {
    position: 'absolute',
    left: spacing.sm / 2,
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: palette.grayLight,
  },
  update: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  dot: {
    width: spacing.xs,
    height: spacing.xs,
    borderRadius: spacing.xs / 2,
    backgroundColor: palette.primary,
    marginRight: spacing.sm,
    marginTop: spacing.base / 2,
  },
  textContainer: {
    flex: 1,
  },
  time: {
    fontSize: typography.sm,
    color: palette.textSecondary,
    marginBottom: spacing.xs,
  },
  text: {
    fontSize: typography.base,
    color: palette.text,
  },
  footer: {
    marginTop: spacing.sm,
    alignItems: 'flex-end',
  },
  footerText: {
    fontSize: typography.base,
    color: palette.primary,
    fontWeight: '600',
  },
})

export const ProjectSummaryStyles = StyleSheet.create({
  container: {
    backgroundColor: palette.background,
    borderRadius: spacing.lg,
    padding: spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  title: {
    fontSize: typography.lg,
    fontWeight: '600',
    color: palette.text,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  bar: {
    flex: 1,
    height: spacing.sm * 1.5,
    borderRadius: spacing.sm,
    marginHorizontal: spacing.md,
  },
  count: {
    fontSize: typography.base,
    color: palette.text,
  },
})

export const TimelineStyles = StyleSheet.create({
  container: {
    marginTop: spacing.md,
  },
})
