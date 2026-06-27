import FeatureCard from '../common/FeatureCard'
import SectionHeader from '../common/SectionHeader'

const features = [
  { title: 'Face Recognition', description: 'Accurate attendance marking using advanced facial recognition.', icon: 'face' },
  { title: 'Geofencing', description: 'Mark attendance only within authorized locations using geofencing.', icon: 'location' },
  { title: 'Real-Time Tracking', description: 'Live attendance status updates for every check-in.', icon: 'clock' },
  { title: 'Analytics Dashboard', description: 'Visualize attendance trends with instant reports.', icon: 'chart' },
  { title: 'Secure Authentication', description: 'Safe access control with enterprise-grade security.', icon: 'shield' },
  { title: 'Attendance Reports', description: 'Generate detailed attendance summaries and analytics.', icon: 'document' }
]

export default function Features() {
  return (
    <section id="features" className="py-16">
      <SectionHeader title="Everything You Need for Smarter Attendance" description="Powerful features to simplify attendance management" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((item) => (
          <FeatureCard key={item.title} title={item.title} description={item.description} icon={item.icon} />
        ))}
      </div>
    </section>
  )
}
