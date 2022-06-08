// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DownSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/DownSquareTwoTone';

export interface DownSquareTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DownSquareTwoTone: DownSquareTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={DownSquareTwoToneSvg} />;

DownSquareTwoTone.displayName = 'DownSquareTwoTone';

export default DownSquareTwoTone;