// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EuroCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/EuroCircleOutlined';

export interface EuroCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconEuroCircleOutlined: EuroCircleOutlinedIconType = (props, context) => (
    <Icon name='EuroCircleOutlined' {...{ ...props, ...context.attrs }} icon={EuroCircleOutlinedSvg} />
);

IconEuroCircleOutlined.displayName = 'IconEuroCircleOutlined';

export default IconEuroCircleOutlined;