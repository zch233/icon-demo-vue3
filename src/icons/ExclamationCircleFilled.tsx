// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ExclamationCircleFilledSvg from '@ant-design/icons-svg/lib/asn/ExclamationCircleFilled';

export interface ExclamationCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ExclamationCircleFilled: ExclamationCircleFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ExclamationCircleFilledSvg} />;

ExclamationCircleFilled.displayName = 'ExclamationCircleFilled';

export default ExclamationCircleFilled;