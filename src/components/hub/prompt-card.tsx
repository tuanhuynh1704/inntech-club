import CopyButton from "./copy-button";
import styles from "./hub-ui.module.css";

type PromptCardProps = {
  prompt: {
    title: string;
    group: string;
    text: string;
    tags: string[];
  };
};

export default function PromptCard({ prompt }: PromptCardProps) {
  return (
    <article className={styles.promptCard}>
      <div className={styles.promptHead}>
        <h3 className={styles.cardTitle}>{prompt.title}</h3>
        <span className={styles.promptGroup}>{prompt.group}</span>
        <CopyButton text={prompt.text} />
      </div>
      <pre className={styles.promptText}>{prompt.text}</pre>
      {prompt.tags.length > 0 && (
        <div className={styles.chips}>
          {prompt.tags.map((tag) => (
            <span key={tag} className={styles.chip}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
