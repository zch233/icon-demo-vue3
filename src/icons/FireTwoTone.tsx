// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FireTwoToneSvg from '@ant-design/icons-svg/lib/asn/FireTwoTone';

export interface FireTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FireTwoTone: FireTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FireTwoToneSvg} />;

FireTwoTone.displayName = 'FireTwoTone';

export default FireTwoTone;