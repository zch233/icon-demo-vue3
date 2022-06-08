// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CloseCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloseCircleTwoTone';

export interface CloseCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CloseCircleTwoTone: CloseCircleTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={CloseCircleTwoToneSvg} />;

CloseCircleTwoTone.displayName = 'CloseCircleTwoTone';

export default CloseCircleTwoTone;