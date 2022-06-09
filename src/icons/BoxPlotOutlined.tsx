// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BoxPlotOutlinedSvg from '@ant-design/icons-svg/lib/asn/BoxPlotOutlined';

export interface BoxPlotOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BoxPlotOutlined: BoxPlotOutlinedIconType = (props, context) => <Icon name='BoxPlotOutlined' {...{ ...props, ...context.attrs }} icon={BoxPlotOutlinedSvg} />;

BoxPlotOutlined.displayName = 'BoxPlotOutlined';

export default BoxPlotOutlined;