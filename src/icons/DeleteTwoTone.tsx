// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import DeleteTwoToneSvg from '@ant-design/icons-svg/lib/asn/DeleteTwoTone';

export interface DeleteTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DeleteTwoTone: DeleteTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={DeleteTwoToneSvg} />
    ;

DeleteTwoTone.displayName = 'DeleteTwoTone';

export default FunctionalComponent;