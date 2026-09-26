export default function StatBar({ label, value }) {
  const percentage = Math.min((value / 180) * 100, 100)

  return (
    <div className="stat-bar">
      <div className="stat-heading">
        <span>{label}</span>
        <strong>{value}</strong>
      </div>

      <div className="stat-track">
        <span
          className="stat-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
