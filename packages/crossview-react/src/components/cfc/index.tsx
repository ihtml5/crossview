
import { DireflowComponent } from 'direflow-component';
import { useState } from "react";
import { Card } from 'antd';

import styles from './cfc.module.css';

const { Meta } = Card;
function Kwr() {
    const [count, setCount] = useState(0);
    return   <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <div onClick={() => setCount(count + 1)} className={styles.cfc}>{count}</div>
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>;
}


const KwrWc = DireflowComponent.create({
  component: Kwr,
  configuration: {
    tagname: 'kwr-ui-interactive',
    useShadow: false,
  },
});

declare global {
    namespace JSX {
        interface IntrinsicElements {
            //@ts-ignore
            'kwr-ui-interactive': KwrWc;
          }
    }
};

export default KwrWc;

