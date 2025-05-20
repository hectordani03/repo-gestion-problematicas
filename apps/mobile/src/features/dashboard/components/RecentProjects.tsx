// apps/mobile/src/features/dashboard/components/RecentProjects.tsx

import React from 'react'
import { View, Text, Image } from 'react-native'
import avatar from '../../../assets/avatar.png'
import { RecentProjectsStyles as styles } from '../../../styles/components/dashboard/dashboardComponents.styles'

const projects = [
  { name: 'Growth | Web Page', desc: 'Página corporativa rediseñada', date: '04/03/25' },
  { name: 'API Mobile',        desc: 'Integración con backend',     date: '28/02/25' },
  { name: 'Onboarding',        desc: 'Nuevo flujo de registro',      date: '15/02/25' },
]

const RecentProjects: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>Proyectos recientes</Text>
    </View>
    {projects.map((p, i) => (
      <View key={i} style={{ marginBottom: i < projects.length - 1 ? styles.project.marginBottom : 0 }}>
        <View style={styles.project}>
          <Image source={avatar} style={styles.avatar} />
          <View style={styles.info}>
            <Text style={styles.name}>{p.name}</Text>
            <Text style={styles.desc}>{p.desc}</Text>
            <Text style={styles.date}>Fecha: {p.date}</Text>
          </View>
        </View>
      </View>
    ))}
  </View>
)

export default RecentProjects
