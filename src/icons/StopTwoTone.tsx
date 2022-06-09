// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import StopTwoToneSvg from '@ant-design/icons-svg/lib/asn/StopTwoTone';

export interface StopTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const StopTwoTone: StopTwoToneIconType = (props, context) => <Icon name='StopTwoTone' {...{ ...props, ...context.attrs }} icon={StopTwoToneSvg} />;

StopTwoTone.displayName = 'StopTwoTone';

export default StopTwoTone;