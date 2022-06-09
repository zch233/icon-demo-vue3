// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DownCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/DownCircleTwoTone';

export interface DownCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DownCircleTwoTone: DownCircleTwoToneIconType = (props, context) => <Icon name='DownCircleTwoTone' {...{ ...props, ...context.attrs }} icon={DownCircleTwoToneSvg} />;

DownCircleTwoTone.displayName = 'DownCircleTwoTone';

export default DownCircleTwoTone;