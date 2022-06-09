// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ExclamationCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExclamationCircleOutlined';

export interface ExclamationCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ExclamationCircleOutlined: ExclamationCircleOutlinedIconType = (props, context) => <Icon name='ExclamationCircleOutlined' {...{ ...props, ...context.attrs }} icon={ExclamationCircleOutlinedSvg} />;

ExclamationCircleOutlined.displayName = 'ExclamationCircleOutlined';

export default ExclamationCircleOutlined;