// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CheckCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CheckCircleOutlined';

export interface CheckCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CheckCircleOutlined: CheckCircleOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={CheckCircleOutlinedSvg} />;

CheckCircleOutlined.displayName = 'CheckCircleOutlined';

export default FunctionalComponent;