// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import StopTwoToneSvg from 'icon-base/es/asn/StopTwoTone';

export interface StopTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconStopTwoTone: StopTwoToneIconType = (props, context) => <Icon name='StopTwoTone' {...{ ...props, ...context.attrs }} icon={StopTwoToneSvg} />;

IconStopTwoTone.displayName = 'IconStopTwoTone';
IconStopTwoTone.theme = 'twotone';
IconStopTwoTone.originName = 'stop';

export default IconStopTwoTone;
