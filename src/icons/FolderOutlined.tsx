// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FolderOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderOutlined';

export interface FolderOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FolderOutlined: FolderOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FolderOutlinedSvg} />
    ;

FolderOutlined.displayName = 'FolderOutlined';

export default FunctionalComponent;