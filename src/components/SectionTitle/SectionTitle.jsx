import css from './SectionTitle.module.css';
export const SectionTitle = ({ title, children }) => {
  return (
    <div className={css.section}>
      <h2 className="csstitle">{title}</h2>
      {children}
    </div>
  );
};
