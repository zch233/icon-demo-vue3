// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AreaChartOutlinedSvg from '@ant-design/icons-svg/es/asn/AreaChartOutlined';

export interface AreaChartOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAreaChartOutlined: AreaChartOutlinedIconType = (props, context) => (
    <Icon name='AreaChartOutlined' {...{ ...props, ...context.attrs }} icon={AreaChartOutlinedSvg} />
);

IconAreaChartOutlined.displayName = 'IconAreaChartOutlined';

export default IconAreaChartOutlined;