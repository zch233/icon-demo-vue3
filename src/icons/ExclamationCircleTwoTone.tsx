// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ExclamationCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ExclamationCircleTwoTone';

export interface ExclamationCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ExclamationCircleTwoTone: ExclamationCircleTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ExclamationCircleTwoToneSvg} />;

ExclamationCircleTwoTone.displayName = 'ExclamationCircleTwoTone';

export default ExclamationCircleTwoTone;