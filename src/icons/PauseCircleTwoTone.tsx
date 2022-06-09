// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PauseCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PauseCircleTwoTone';

export interface PauseCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PauseCircleTwoTone: PauseCircleTwoToneIconType = (props, context) => <Icon name='PauseCircleTwoTone' {...{ ...props, ...context.attrs }} icon={PauseCircleTwoToneSvg} />;

PauseCircleTwoTone.displayName = 'PauseCircleTwoTone';

export default PauseCircleTwoTone;