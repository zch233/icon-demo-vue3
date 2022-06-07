// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PaperClipOutlinedSvg from '@ant-design/icons-svg/lib/asn/PaperClipOutlined';

export interface PaperClipOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PaperClipOutlined: PaperClipOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PaperClipOutlinedSvg} />
    ;

PaperClipOutlined.displayName = 'PaperClipOutlined';

export default FunctionalComponent;