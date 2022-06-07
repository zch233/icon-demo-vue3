// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FormatPainterFilledSvg from '@ant-design/icons-svg/lib/asn/FormatPainterFilled';

export interface FormatPainterFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FormatPainterFilled: FormatPainterFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FormatPainterFilledSvg} />
    ;

FormatPainterFilled.displayName = 'FormatPainterFilled';

export default FunctionalComponent;