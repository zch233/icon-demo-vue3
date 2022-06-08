// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import InfoCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/InfoCircleOutlined';

export interface InfoCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const InfoCircleOutlined: InfoCircleOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={InfoCircleOutlinedSvg} />;

InfoCircleOutlined.displayName = 'InfoCircleOutlined';

export default FunctionalComponent;