// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import UpCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/UpCircleTwoTone';

export interface UpCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const UpCircleTwoTone: UpCircleTwoToneIconType = (props, context) => <Icon name='UpCircleTwoTone' {...{ ...props, ...context.attrs }} icon={UpCircleTwoToneSvg} />;

UpCircleTwoTone.displayName = 'UpCircleTwoTone';

export default UpCircleTwoTone;