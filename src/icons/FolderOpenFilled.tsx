// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import FolderOpenFilledSvg from '@ant-design/icons-svg/lib/asn/FolderOpenFilled';

export interface FolderOpenFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FolderOpenFilled: FolderOpenFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={FolderOpenFilledSvg} />
    ;

FolderOpenFilled.displayName = 'FolderOpenFilled';

export default FolderOpenFilled;