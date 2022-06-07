// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import BoxPlotFilledSvg from '@ant-design/icons-svg/lib/asn/BoxPlotFilled';

export interface BoxPlotFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BoxPlotFilled: BoxPlotFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={BoxPlotFilledSvg} />
    ;

BoxPlotFilled.displayName = 'BoxPlotFilled';

export default BoxPlotFilled;