// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import SnippetsFilledSvg from '@ant-design/icons-svg/lib/asn/SnippetsFilled';

export interface SnippetsFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SnippetsFilled: SnippetsFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={SnippetsFilledSvg} />
    ;

SnippetsFilled.displayName = 'SnippetsFilled';

export default SnippetsFilled;