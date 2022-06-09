// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import InfoCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/InfoCircleTwoTone';

export interface InfoCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const InfoCircleTwoTone: InfoCircleTwoToneIconType = (props, context) => <Icon name='InfoCircleTwoTone' {...{ ...props, ...context.attrs }} icon={InfoCircleTwoToneSvg} />;

InfoCircleTwoTone.displayName = 'InfoCircleTwoTone';

export default InfoCircleTwoTone;