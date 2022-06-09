// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import EyeTwoToneSvg from '@ant-design/icons-svg/lib/asn/EyeTwoTone';

export interface EyeTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const EyeTwoTone: EyeTwoToneIconType = (props, context) => <Icon name='EyeTwoTone' {...{ ...props, ...context.attrs }} icon={EyeTwoToneSvg} />;

EyeTwoTone.displayName = 'EyeTwoTone';

export default EyeTwoTone;