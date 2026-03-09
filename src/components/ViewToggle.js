import './ViewToggle.css';

function ViewToggle({ viewMode, onToggle }) {
  return (
    <div className="view-toggle">
      <button
        className={`toggle-btn ${viewMode === 'modal' ? 'active' : ''}`}
        onClick={() => onToggle('modal')}
      >
        Modal View
      </button>
      <button
        className={`toggle-btn ${viewMode === 'page' ? 'active' : ''}`}
        onClick={() => onToggle('page')}
      >
        Page View
      </button>
    </div>
  );
}

export default ViewToggle;
