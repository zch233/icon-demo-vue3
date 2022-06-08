// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BoxPlotTwoToneSvg from '@ant-design/icons-svg/lib/asn/BoxPlotTwoTone';

export interface BoxPlotTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BoxPlotTwoTone: BoxPlotTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={BoxPlotTwoToneSvg} />;

BoxPlotTwoTone.displayName = 'BoxPlotTwoTone';

export default BoxPlotTwoTone;