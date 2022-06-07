// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import Html5FilledSvg from '@ant-design/icons-svg/lib/asn/Html5Filled';

export interface Html5FilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const Html5Filled: Html5FilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={Html5FilledSvg} />
    ;

Html5Filled.displayName = 'Html5Filled';

export default Html5Filled;