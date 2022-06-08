// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import InfoCircleFilledSvg from '@ant-design/icons-svg/lib/asn/InfoCircleFilled';

export interface InfoCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const InfoCircleFilled: InfoCircleFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={InfoCircleFilledSvg} />;

InfoCircleFilled.displayName = 'InfoCircleFilled';

export default InfoCircleFilled;