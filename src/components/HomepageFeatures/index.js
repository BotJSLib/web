import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Run everywhere",
    Svg: require("@site/static/img/undraw_everwhere.svg").default,
    description: (
      <>
        You need to code the bot once with our library, then you can run it on
        multiple platforms.
      </>
    ),
  },
  {
    title: "Decorators",
    Svg: require("@site/static/img/undraw_code.svg").default,
    description: (
      <>
        Use simple decorators to handle all the listeners so you don't have to
        register them and you can keep your code clean.
      </>
    ),
  },
  {
    title: "Open Source",
    Svg: require("@site/static/img/undraw_pair.svg").default,
    description: (
      <>
        We are always open to new feedbacks and contributions, you can create
        issues and pull requests on our github page.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
