export default function Logo() {
  const collapsed = useAppSelector(selectCollapsed);
  return (
    <div className="logo">
      <img
        style={{ width: 43 }}
        src={`${import.meta.env.BASE_URL}logo64.png`}
      />
      <div style={{ width: !collapsed ? 141 : 0, transition: 'width 0.3s' }}>
        <h1 className="logo_text">React Tamplate</h1>
      </div>
    </div>
  );
}
